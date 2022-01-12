import axios from 'axios'
import { compile, parse } from 'path-to-regexp'
import { flowRight } from 'lodash'

const parsePayloadAndOptions = ({ url, method, pathParamIds, params = {}, ...payload }) => {
  const filteredParams = { ...params }
  
  pathParamIds.forEach((p) => { if (p.name) filteredParams[p.name] = undefined })
  
  if (method) === 'post' || method === 'put') {
    return [url, payload, filteredParams]
  }
  
  return [url, filteredParams]
}

const generateRequest = (instance, method, compiler) => params => instance[method](...flowRight(parsePayloadAndOptions, compiler)({ params, method })
                                                                                   
const generatePathCompiler = (path) => {
  const compileWithParams = compile(path, { encode: encodeURIComponent })
  
  const [baseUrl, ...pathParamIds] = parse(path)
  
  return ({ params = {}, ...rest }) => {
    const paramsPresent = !!pathParamIds?.some(p => params[p.name])
    
    const url = paramsPresent ? compileWithParams(params) : baseUrl
    
    return { ...rest, url, params, pathParamIds }
  }
}

export default useApiGenerate({ path, methods, instance, ...axiosCreateOptions }) {
  const api = instance || axios.create(axiosCreateOptions)
  
  const compilePath = generatePathCompiler(path)
  
  const httpMethods = methods || ['get', 'post', 'put', 'delete']
  
  return httpMethods.map(method => generateRequest(api, method, compilePath))
}                                                                    
                                                                                   
