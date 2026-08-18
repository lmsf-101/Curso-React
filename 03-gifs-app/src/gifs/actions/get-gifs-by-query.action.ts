// Uso de Axios para recuperar GIFs

import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";


export const getGifsByQuery = async(query: string): Promise<Gif[]> => {

	const response = await giphyApi<GiphyResponse>('/search', {
		params: {
			q: query,
			limit: 10,
		},
	});

	return response.data.data.map((data) => ({
		id: data.id,
		title: data.title,
		url: data.images.original.url,
		width: Number(data.images.original.width),
		height: Number(data.images.original.height)
		
	}));
   
};
