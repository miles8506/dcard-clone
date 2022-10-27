import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth/dist/index.esm.js.map'
import { firebaseConfig } from './config'

firebase.initializeApp(firebaseConfig)

export default firebase
export const db = firebase.firestore()
