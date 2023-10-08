<template id="myTemplate">
  <div>
    <div>
      <el-carousel height="400px" arrow="never" indicator-position="none">
        <el-carousel-item>
          <canvas id="lines"></canvas>
        </el-carousel-item>
        <!-- <el-carousel-item>
          <el-image src="./images/sample/suits001-blue.png" class="carousel-image"></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image src="./images/sample/suits002-blue.png" class="carousel-image"></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <el-image src="./images/sample/suits003-blue.png" class="carousel-image"></el-image>
        </el-carousel-item> -->
        <div class="carousel-string">
          <h2 class="catchString fontSerif">
            Solution<span>&nbsp;</span>&<span>&nbsp;</span>Evolution
          </h2>
          <p class="text-sm">
            新しい発想と技術とコミュニケーションで問題を解決し、<br />より良い方法をご提案させていただきます。
          </p>
        </div>
      </el-carousel>
    </div>
  </div>
  <!-- <ul class="mt-16 grid grid-cols-1 gap-8">
    <li v-for="blog in data?.contents" :key="blog.id">
      <NuxtLink :to="`/${blog.id}`"
        class="flex flex-col gap-4 sm:transition-shadow sm:hover:shadow md:flex-row md:items-center lg:gap-6">
        <img :src="blog.eyecatch?.url" :width="blog.eyecatch?.width" :height="blog.eyecatch?.height"
          class="md:w-1/3 md:flex-none" alt="" />
        <div class="md:p-2.5 md:pr-0">
          <div
            class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600">
            {{ blog.category?.name }}
          </div>
          <div class="mt-2 text-lg font-semibold md:text-xl">
            {{ blog.title }}
          </div>
          <div class="mt-1 text-sm text-gray-700">
            {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul> -->
  <!-- <script src="../assets/ts/lines.ts"></script> -->
</template>

<script setup lang = "ts" >
// import { Blog } from "~~/types/Blog";
// const { data } = await useMicroCMSGetList<Blog>({
//   endpoint: "blogs",
// });
// console.log('data')
// console.log(data)
// console.log('data')

// const config = useRuntimeConfig()
// console.log('Runtime configの出力:', config)
// if (process.server) {
//   console.log('API secretの出力:', config.apiSecret)
// }
// import { lines } from "~~/assets/ts/lines"
if (process.client) {
  window.addEventListener('load', (event) => {
        (function () {
            const canvas = document.getElementById("lines");
            const ctx = canvas.getContext("2d");
            let width;
            let height;
            class Line {
                constructor(origin, size, length, color, style = "pattern") {
                    this.size = size;
                    this.origin = origin;
                    this.length = length;
                    this.color = color;
                    this.style = style;
                    this.origin = `M${origin.x},${origin.y}`;
                    this.offSet = 0;
                    this.line = null;
                    this.offSetSpeed = length / size;
                }
                getColorString() {
                    return `hsla(${this.color.h}deg,${this.color.s}%,${this.color.l}%,${this.color.a})`;
                }
                generators() {
                    return [
                        {
                            line: `h${this.size}`,
                            mag: this.size
                        },
                        {
                            line: `h-${this.size}`,
                            mag: this.size
                        },
                        {
                            line: `v${this.size}`,
                            mag: this.size
                        },
                        {
                            line: `v-${this.size}`,
                            mag: this.size
                        },
                        {
                            line: `l${this.size},${this.size}`,
                            mag: Math.hypot(this.size, this.size)
                        },
                        {
                            line: `l${this.size}-${this.size}`,
                            mag: Math.hypot(this.size, this.size)
                        },
                        {
                            line: `l-${this.size},${this.size}`,
                            mag: Math.hypot(this.size, this.size)
                        },
                        {
                            line: `l-${this.size}-${this.size}`,
                            mag: Math.hypot(this.size, this.size)
                        }
                    ];
                }
                generate() {
                    let segments = this.generators(this.size);
                    let path = this.origin;
                    let mag = 0;
                    let fragment;
                    let i;
                    for (i = 0; i < this.length; i += 1) {
                        fragment = segments[(Math.random() * segments.length) | 0];
                        path += ` ${fragment.line}`;
                        mag += fragment.mag;
                    }
                    this.line = {
                        path,
                        mag
                    };
                    return this;
                }
                renderStyle(style) {
                    if (style === "glitches") {
                        ctx.lineDashOffset = this.line.mag + this.offSet;
                        ctx.setLineDash([
                            this.size ** 1.5,
                            (this.line.mag / this.length) * this.size ** 2
                        ]);
                        this.offSet += 20;
                        // this.size / (this.size ** 2);
                        ctx.lineWidth = 2;
                        return this;
                    }
                    if (style === "pattern") {
                        ctx.lineDashOffset = this.line.mag - this.offSet;
                        ctx.setLineDash([this.line.mag, this.line.mag]);
                        this.offSet += 10;
                        //this.size / (this.size ** 100);
                        ctx.lineWidth = 0.2;
                    }
                }
                mutatePath() {
                    let lineFragment = this.line.path.split(" ").slice(1);
                    let generator = this.generators();
                    lineFragment[(Math.random() * lineFragment.length) | 0] =
                        generator[(Math.random() * generator.length) | 0].line;
                    this.line.path = `${this.line.path.split(" ")[0]} ${lineFragment.join(
                        " "
                    )}`;
                }
                draw() {
                    !this.line && this.generate();

                    ctx.strokeStyle = this.getColorString();
                    this.renderStyle(this.style);
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    ctx.stroke(new Path2D(this.line.path));
                    return this;
                }
            }
            function clear() {
                ctx.fillStyle = `hsla(200deg, 20%, 10%, 0.3)`;
                ctx.fillRect(0, 0, width, height);
            }
            function generateLines(amount) {
                let lines = [];
                let styles = [
                    {
                        size: 1.25,
                        style: "pattern",
                        color: { h: 210, s: 100, l: 70, a: 0.5 }
                    },
                    { size: 2.5, style: "pattern", color: { h: 190, s: 90, l: 50, a: 0.3 } },
                    { size: 5, style: "pattern", color: { h: 210, s: 70, l: 60, a: 0.2 } },
                    { size: 10, style: "pattern", color: { h: 310, s: 80, l: 55, a: 0.15 } },
                    { size: 20, style: "pattern", color: { h: 200, s: 25, l: 35, a: 0.12 } },
                    { size: 20, style: "pattern", color: { h: 210, s: 20, l: 40, a: 0.12 } },
                    { size: 40, style: "pattern", color: { h: 190, s: 40, l: 50, a: 0.12 } },
                    { size: 80, style: "pattern", color: { h: 220, s: 50, l: 60, a: 0.12 } },
                    { size: 40, style: "glitches", color: { h: 300, s: 100, l: 50, a: 0.3 } },
                    { size: 20, style: "glitches", color: { h: 210, s: 100, l: 50, a: 0.3 } },
                    { size: 60, style: "glitches", color: { h: 30, s: 100, l: 50, a: 0.3 } }
                ];
                for (let i = 0; i < amount; i += 1) {
                    let style = styles[(Math.random() ** 2 * styles.length) | 0];
                    lines.push(
                        new Line(
                            { x: width * 0.5, y: height * 0.5 },
                            style.size,
                            500 + Math.random() * 1000,
                            style.color,
                            style.style
                        )
                    );
                }
                return lines;
            }
            let id;
            function resize() {
                id = cancelAnimationFrame(id);
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width;
                canvas.height = height;
                const lines = generateLines(40);
                function update() {
                    if (!(id % 3)) {
                        clear();
                        lines.forEach((line) => {
                            line.draw();
                            if (!(id % 5) && Math.random() > 0.95) {
                                line.mutatePath();
                            }
                        });
                    }
                    id = requestAnimationFrame(update);
                }
                id = requestAnimationFrame(update);
            }
            window.addEventListener("resize", resize, {
                passive: true
            });
            resize();
        })();
    });
}
</script>

<style scoped>
.catchString {
  margin-bottom: 30px;
  font-size: 80px;
  letter-spacing: 0.1em;
}

.fontSerif {
  font-family: 'Sorts Mill Goudy', serif;
}

.carousel-image {
  width: inherit;
  height: inherit;
}

.carousel-string {
  position: relative;
  color: white;
  text-align: center;
  top: calc(50% - 40px);
}
</style>