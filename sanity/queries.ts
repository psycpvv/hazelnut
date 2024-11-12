import { groq } from 'next-sanity'

export const imageProps = groq`
{
  ...asset-> {
    "src": url,
    ...metadata { ...dimensions { width, height }} 
  }
}
`

export const withImageProps = groq`
{
  ...,
  image ${imageProps}
}
`
export const seo = groq`seo ${withImageProps}`

export const modulesQuery = groq`
modules[]{ 
  ...,
  _type == "contact" => @->,
  _type == "contact" => @->,
  _type == "how-it-works" => {
    ...,
    steps[] {
      ...,
      "lottieFile": lottieFile.asset->url
    }
  }
  
}
`
export const richTextQuery = (name: string = 'body') => groq`
  ${name}[] {
      ...,
    _type == "video" => {
      ...,
      type == "file" => {
        "url": file.asset->url
      }
    }
  }
`
