import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import { config } from './config'

firebase.initializeApp(config)

export default firebase
export const db = firebase.firestore()
