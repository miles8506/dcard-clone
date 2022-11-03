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
