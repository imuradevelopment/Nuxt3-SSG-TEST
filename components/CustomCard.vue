<!-- <template>
    <div class="wrapper z-0">
        <div class="bg-black absolute top-0 left-0 w-full h-full z-1"></div>
        <div class="m-1 md:m-2 z-2">
            <div :style="style" class="relative bg-cover text-white">
                <div class="">
                    <div class="text-2xl font-bold max-w-max ml-auto bg-custom-bgcolor text-custom-textcolor p-1 z-0" :class="titleClass">
                        <slot name="title">デフォルトタイトル</slot>
                    </div>
                    <div class="m-2 text-base font-medium" :class="discriptionClass">
                        <slot name="description">デフォルト説明</slot>
                    </div>
                    <div class="text-base font-medium flex flex-row-reverse justify-between" :class="buttonsClass">
                        <CustomButton v-for="(button, index) in buttons" :to="button.to" :class="button.class" :key="index">
                            {{ button.label }}
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->
<!-- <template>
    <div class="wrapper z-0 relative">
        <div class="bg-gray-700/90 absolute top-0 left-0 w-full h-full z-20"></div>
        <div class="m-1 md:m-2 z-30">
            <div :style="style" class="relative bg-cover text-white">
                <div class="relative p-10">
                    <div class="text-2xl font-bold max-w-max ml-auto bg-custom-bgcolor text-custom-textcolor"
                        :class="titleClass">
                        <slot name="title">デフォルトタイトル</slot>
                    </div>
                </div>
                <div class="m-2 text-base font-medium" :class="discriptionClass">
                    <slot name="description">デフォルト説明</slot>
                </div>
                <div class="text-base font-medium flex flex-row-reverse justify-between" :class="buttonsClass">
                    <CustomButton v-for="(button, index) in buttons" :to="button.to" :class="button.class" :key="index">
                        {{ button.label }}
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
</template> -->
<!-- <template>
    <div class="wrapper z-0 relative">
      <div class="m-1 md:m-2 z-20 relative">
        <div class="bg-gray-700/90 absolute top-0 left-0 w-full h-full z-10"></div>
        <div :style="style" class="relative bg-cover text-white">
          <div class="relative p-10">
            <div class="text-2xl font-bold max-w-max ml-auto bg-custom-bgcolor text-custom-textcolor z-20" :class="titleClass">
              <slot name="title">デフォルトタイトル</slot>
            </div>
          </div>
          <div class="m-2 text-base font-medium" :class="discriptionClass">
            <slot name="description">デフォルト説明</slot>
          </div>
          <div class="text-base font-medium flex flex-row-reverse justify-between" :class="buttonsClass">
            <CustomButton v-for="(button, index) in buttons" :to="button.to" :class="button.class" :key="index">
              {{ button.label }}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </template>
   -->
   <template>
    <div class="w-full md:w-1/2 wrapper z-0 relative">
      <!-- 4番目のレイヤー -->
      <div class="m-1 md:m-2 z-40 relative">
        <div :style="style" class="relative bg-cover text-white">
          <!-- 3番目のレイヤー -->
          <!-- <div class="bg-gray-700/90 absolute top-0 left-0 w-full h-full z-30"></div -->
          <div class="relative pt-20">
            <!-- 2番目のレイヤー -->
            <div class="flex justify-end" :class="discriptionClass">
                <div class="lnline-flex p-2 text-sm md:text-base font-medium bg-gray-900/40 max-w-80">
                    <slot name="description">デフォルト説明</slot>
                </div>
            </div>
            <div class="p-4 text-base font-medium flex flex-row-reverse justify-between" :class="buttonsClass">
              <CustomButton v-for="(button, index) in buttons" :to="button.to" :class="button.class" :key="index">
                {{ button.label }}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
  
      <!-- 1番目のレイヤーを4番目の右上に配置 -->
      <div class="z-40 absolute top-0 right-0">
        <div class="p-4 max-w-max ml-auto text-2xl font-bold line-clamp-1 bg-gray-900/40 text-white z-20" :class="titleClass">
          <slot name="title">デフォルトタイトル</slot>
        </div>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import CustomButton from './CustomButton.vue';
import { StyleValue } from 'nuxt/dist/app/compat/capi';

interface Button {
    to: string;
    class: string;
    label: string;
}

const props = defineProps({
    url: {
        type: String,
        required: false,
        default: '',
    },
    titleClass: {
        type: String,
        required: false,
        default: '',
    },
    discriptionClass: {
        type: String,
        required: false,
        default: '',
    },
    buttonsClass: {
        type: String,
        required: false,
        default: '',
    },
    buttons: {
        type: Array as PropType<Button[]>,
        required: false,
        default: () => [
            {
                to: "/",
                class: "order-last",
                label: "MORE"
            }
        ]
    }
});

const style: StyleValue = props.url
    ? {
        background: 'url(' + props.url + ') no-repeat center',
        'background-size': 'cover'
    }
    : '';
</script>
<style scoped>
.max-w-80 {
  max-width: 80%;
}
</style>
  