import axios from 'axios'
import fs from 'node:fs'

const main = async () => {
  try {
    const { data } = await axios.get(
      'https://odws.hccg.gov.tw/001/Upload/25/opendataback/9059/1550/245aa5d2-c5b5-4e7d-afbf-420248f63e2c.json'
    )
    console.log(data.length)
    // 寫入檔案
    // fs.writeFileSync(檔案路徑,文字)
    // (data,null,2) null 取代，縮排的空白(2個空白)
    fs.writeFileSync('./food.json', JSON.stringify(data, null, 2))
  } catch (error) {
    console.error(error)
  }
}
main()
