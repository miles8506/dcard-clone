import { ComponentType } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'

export default function withRouter(OriginComponent: ComponentType) {
  const params = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const query = Object.fromEntries(searchParams)

  return function (props: any) {
    return <OriginComponent {...props} router={{ params, navigate, query }} />
  }
}
