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

export enum MobileNavigate {
  home,
  list,
  profile
}

export enum SearchTab {
  synthesize = 'synthesize',
  article = 'article',
  board = 'board'
}

export enum ICorrelation {
  '最新發佈',
  '心情數',
  '評論數'
}

export enum ICorrelationId {
  new,
  emotion,
  comment
}

export enum ITime {
  '不限時間',
  '1 天內',
  '7 天內',
  '30 天內'
}

export enum ITimeId {
  all,
  day,
  week,
  month
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

function mappingEnumToNameId(tab: {[key: string]: any}) {
  const obj = Object.entries(tab)
  const list: {name: string, id: number}[] = []
  for (const item of obj) {
    if (typeof item[1] === 'number') {
      list.push({
        name: item[0],
        id: item[1]
      })
    }
  }
  return list
}

export const tabsEnum = mappingEnumToObject(Tabs)
export const selectFilterEnum = mappingEnumToObject(SelectFilter)
export const correlationList = mappingEnumToNameId(ICorrelation)
export const timeList = mappingEnumToNameId(ITime)
export const mobileNavigateList = mappingEnumToNameId(MobileNavigate)
