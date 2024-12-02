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
  _type == "sto-status" => @->,
  _type == "how-it-works" => {
    ...,
    steps[] {
      ...,
      "lottieFile": lottieFile.asset->url
    }
  },
  _type == "partners" => @->{
    ...,
    "title":  coalesce(title[_key == $locale][0].value, "Missing translation"),
  },
  _type == "timeline" => @->,
  _type == "team" => @->{
    ...,
    "title":  coalesce(title[_key == $locale][0].value, "Missing translation"),
    "subtitle":  coalesce(subtitle[_key == $locale][0].value, "Missing translation"),
    "team": team[]{
      ...,
      "role":  coalesce(role[_key == $locale][0].value, "Missing translation"),
    }
  },
  _type == "why-treesury" => @->,
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
