const fs = require('fs/promises')
const path = require('path')

const dir = path.join(
  __dirname,
  'docs/PROJECT_EUREKA/Anime/Psalms_of_Planets/characters'
)

const data = `Stoner ストナー 史托纳
Ken-goh ケンゴウ 建吾
Mischa ミーシャ 米莎
Gonzy ゴンジイ 冈吉
Jobs ジョブス 乔布斯
Woz ウォズ 沃兹
Hap ハッポ 哈普
Gidget ギジェト 基杰特
Moondoggie ムーンドギー 姆达吉
Maurice モーリス 莫里斯
Maeter メーテル 梅特尔
Linck リンク 林克`
  .split('\n')
  .map((item) => {
    const [en, jp, cn] = item.split(' ')
    return {
      name: en + '.md',
      content: `---
lang: zh-CN
title: ${cn}
description: ${cn}(${jp} / ${en}) - 交响诗篇
---

# ${cn}

[${jp} / ${en}]
`,
    }
  })

console.log(data)

data.forEach((item) => {
  fs.writeFile(path.join(dir, item.name), item.content)
})
