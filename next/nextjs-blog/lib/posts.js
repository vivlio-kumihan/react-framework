import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "posts")

export function getSortedPostsData() {
  // 『/pages/posts』ディレクトリ内のファイル名を収集する。
  const fileNames = fs.readdirSync(postsDir)
  // ファイル名から抽出したインスタンスから以下を処理して
  // allPostsDataへ代入する。
  // id、ファイルのパス、ファイルの内容の抜き出しとYAMLで記述された内容をJSONに変換
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}