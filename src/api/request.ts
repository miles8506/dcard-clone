import { db } from "./firebase"
import firebase from 'firebase'

/**
 * get ref in the column
 *
 * @param colName: column name
 * @param docName: doc name
 * @returns Promise
 */
export function requestRef<T = any>(colName: string, docName: string): Promise<T> {
  const ref = db.collection(colName).doc(docName)

  return new Promise((resolve, reject) => {
    ref
      .get()
      .then((doc: any) => {
        resolve(doc.data())
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

/**
 * get column
 *
 * @param colName column name
 * @returns Promise
 */
export function requestCol<T = any>(colName: string): Promise<T> {
  return new Promise((resolve, reject) => {
    const ref = db.collection(colName)

    ref
      .get()
      .then((doc: any) => {
        resolve(doc.docs)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

/**
 * save data to firebase
 *
 * @param colName column name
 * @param docName document name
 * @param data pure data save to firebase
 * @returns Promise
 */
export function setQuery<T extends firebase.firestore.DocumentData>(colName: string, docName: string | number, data: T): Promise<T> {
  return new Promise((resolve, reject) => {
    const ref = db.collection(colName).doc(docName.toString())

    ref
      .set(data)
      .then((res: any) => {
        resolve(res)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}
