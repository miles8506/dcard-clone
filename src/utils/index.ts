import { Sort, SelectFilter } from "@/enum"
import type { IArticle } from "@/store/article/type"
import dayjs from 'dayjs'
import { ICorrelationId, ITimeId } from "@/enum/main"
import { IHotBoard } from "@/store/main/type"

export const isEmpty = (value: string | number) => {
  return value.toString().length === 0
}

export const isEmail = (value: string) => {
  return (/^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/).test(value)
}

class _MSStore {
  private session: null | Storage = null

  constructor(isSession = true) {
    this.session = isSession ? sessionStorage : localStorage
  }

  getItem(key: string) {
    return JSON.parse(((this.session as Storage).getItem(key) as string))
  }

  setItem<T = any>(key: string, value: T) {
    (this.session as Storage).setItem(key, JSON.stringify(value))
  }

  removeItem(key: string) {
    (this.session as Storage).removeItem(key)
  }

  clear() {
    this.session?.clear()
  }
}

export const MSSessionStore = new _MSStore()
export const MSLocalStore = new _MSStore(false)

export function timeGap(timer: number) {
  const _timeGap = dayjs().valueOf() - timer
  if (_timeGap < 3600000) {
    return `${(_timeGap / 1000 / 60).toFixed(0)} 分鐘前`;
  }
  if (_timeGap < 86400000) {
    return `${(_timeGap / 1000 / 60 / 60).toFixed(0)} 小時前`;
  }
  return `${(_timeGap / 1000 / 60 / 60 / 24).toFixed(0)} 天前`;
}

export function filterArticleList(articleList: IArticle[], sort: string, status: number): IArticle[] {
  const filterList = articleList.filter((item: IArticle) => sort === 'any' ? true : Sort[item.sort] === sort)
  if (status === SelectFilter.hot) {
    return filterList.sort((a, b) => b.likeTotal - a.likeTotal)
  }
  if (status === SelectFilter.new) {
    return filterList.sort((a, b) => b.id - a.id)
  }
  return []
}

export function deepCopy(value: any) {
  return JSON.parse(JSON.stringify(value))
}

export function getCurrentTimeStamp() {
  return dayjs().valueOf()
}

export function formatDate(timeStamp: number, formatValue: string) {
  return dayjs(timeStamp).format(formatValue)
}

export function filterSearchArticleList(articleList: IArticle[], query: string, isInner = true) {
  return articleList.filter(
    item => {
      if (isInner) {
        return (
          item.title.toLowerCase().includes(query?.toLowerCase()) ||
          item.pureText.toLowerCase().includes(query?.toLowerCase())
        )
      } else {
        return item.title.toLowerCase().includes(query?.toLowerCase())
      }
    }
  )
}

export function filterCorrelation(articleList: IArticle[], sort: number) {
  if (sort === ICorrelationId.new) return articleList.sort((a, b) => b.id - a.id)
  if (sort === ICorrelationId.emotion) return articleList.sort((a, b) => b.likeTotal - a.likeTotal)
  if (sort === ICorrelationId.comment) return articleList.sort((a, b) => b.commentTotal - a.commentTotal)
  return []
}

const millisecondOfDay = 86400000

export function filterDateRange(articleList: IArticle[], range: number) {
  const currentTimeStamp = dayjs().valueOf()
  if (range === ITimeId.all) return articleList
  if (range === ITimeId.day) return articleList.filter(item => item.id > currentTimeStamp - (millisecondOfDay - 1))
  if (range === ITimeId.week) return articleList.filter(item => item.id > currentTimeStamp - (millisecondOfDay * 7 - 1))
  if (range === ITimeId.month) return articleList.filter(item => item.id > currentTimeStamp - (millisecondOfDay * 30 - 1))
  return []
}

export function filterBoard(hotBoardList: IHotBoard[] ,query: string) {
  return hotBoardList.filter(item => item.name.toLowerCase().includes(query?.toLowerCase()))
}
