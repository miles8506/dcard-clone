import { Sort, SelectFilter } from "@/enum";
import type { IArticle } from "@/store/post/type";
import dayjs from 'dayjs'

export const isEmpty = (value: string | number) => {
  return value.toString().length === 0
}

export const isEmail = (value: string) => {
  return (/^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/).test(value)
}

class _MSSessionStore {
  getItem(key: string) {
    return JSON.parse((sessionStorage.getItem(key) as string))
  }

  setItem<T = any>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value))
  }

  removeItem(key: string) {
    sessionStorage.removeItem(key)
  }
}

export const MSSessionStore = new _MSSessionStore()

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

export function filterList(articleList: IArticle[], sort: string, status: number): IArticle[] {
  const filterList = articleList.filter((item: IArticle) => sort === 'any' ? true : Sort[item.sort] === sort)
  if (status === SelectFilter.hot) {
    return filterList.sort((a, b) => b.likeTotal - a.likeTotal)
  }
  if (status === SelectFilter.new) {
    return filterList.sort((a, b) => b.id - a.id)
  }
  return []
}