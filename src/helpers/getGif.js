export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=kps4T2oEQ9wtjpq7Dmg4hf6DH0oiQ4uD`
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.fixed_height.url,
            height: gif.images?.fixed_height.height,
            width: gif.images?.fixed_height.width
        }
    })

    return gifs;
}