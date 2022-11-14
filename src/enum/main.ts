interface IEnumObject {
  [key: string]: any
}

enum Tabs {
  all,
  track,
}

export enum SelectFilter {
  hot,
  new
}

export enum Sort {
  emotion,
  meme,
  funny,
  apple,
  comics,
  basketball,
  engineer,
  mlb,
  pet,
  cat
}

export enum ArticleFilter {
  hot,
  time
}

function mappingEnumToObject(tab: {[key: string]: any}) {
  const obj = Object.entries(tab)
  const enumObj: IEnumObject = {}
  for (const item of obj) {
    if (typeof item[1] === 'number') {
      enumObj[item[0]] = item[1]
    }
  }
  return enumObj
}

export const tabsEnum = mappingEnumToObject(Tabs)
export const selectFilterEnum = mappingEnumToObject(SelectFilter)
