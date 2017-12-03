export const svgUrlRegex = /\.\/(.*)-.*$/g;
export const svgReactRegex = /\.\/(.*)\.svg/g;

export const getContextObject = (context, regex = svgUrlRegex) => (
  context.keys().map(key => ({
    [key.replace(regex, '$1')]: context(key),
  }))
  .reduce((obj, item) => ({
    ...obj,
    ...item,
  }), {})
);


export const getPlayState = shouldAnimate => (shouldAnimate ? 'running' : 'finished');

export const year = new Date().getFullYear();
