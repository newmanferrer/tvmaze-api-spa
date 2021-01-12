const NAME = 'tvmaze';
const PROTOCOL = 'https://';
const DOMAIN = `${PROTOCOL}${NAME}.com`;
const TVMAZE_API = `${PROTOCOL}api.${NAME}.com`;
const SHOW = `${TVMAZE_API}/shows/`;
const SHOWS = `${TVMAZE_API}/shows`;
const SEARCH = `${TVMAZE_API}/search/shows?q=`;

export default {
 NAME,
 PROTOCOL,
 DOMAIN,
 TVMAZE_API,
 SHOW,
 SHOWS,
 SEARCH,
}

//* ===============================================================================================
//* TVMAZE API https://api.tvmaze.com
//* ===============================================================================================
//* Endpoints - Puntos finales.
//* ===============================================================================================
//* 1.- Show search - Mostrar búsqueda: Muestra 10 resultados de la búsqueda.
//* 'https://api.tvmaze.com/search/shows?q=batman <OK>

//* 2.- Show single search - Mostrar búsqueda única: Muestra solo 1 resultados aleatorio.
//* 'https://api.tvmaze.com/singlesearch/shows?q=batman'<OK>
//* 'http://api.tvmaze.com/singlesearch/shows?q=batmans&embed=episodes' <OK>

//* 3.- Show Lookup - Mostrar bucle: En caso de conocer los ids de referencias externas. 
//* 'https://api.tvmaze.com/lookup/shows?tvrage=24493' <OK>
//* 'https://api.tvmaze.com/lookup/shows?thetvdb=81189' <OK>
//* 'https://api.tvmaze.com/lookup/shows?imdb=tt0944947' <OK>

//* 4.- People search - Búsqueda de personas: Búsqueda de personas en base de datos de la api.
//* 'https://api.tvmaze.com/search/people?q=lauren'<OK>.

//* 5.- Show main information - Show información principal: Muestra el resultado por id.
//* 'https://api.tvmaze.com/shows/1' <OK> 
//* 'https://api.tvmaze.com/shows/1?embed=cast' <OK>

//* 6.- Show episode list - Mostrar lista de episodios: Lista completa de episodios.
//* 'https://api.tvmaze.com/shows/1/episodes' <OK>
//* 'https://api.tvmaze.com/shows/1/episodes?specials=1' 

//* 7.- Episode by number - Episodio por número: Muestra temporada y episodio.
//* 'https://api.tvmaze.com/shows/1/episodebynumber?season=1&number=1' <OK>

//* 8.- Episodes by date - Episodios por fecha: Episodios por fecha (ISO 8601 formatted date).
//* 'https://api.tvmaze.com/shows/1/episodesbydate?date=2013-07-01' <OK>

//* 9.- Show seasons - Mostrar temporadas: Lista completa de temporadas.
//* 'https://api.tvmaze.com/shows/1/seasons' <OK>

//* 10.- Season episodes - Episodios de temporada: Lista de episodios de esta temporada.
//* 'https://api.tvmaze.com/seasons/1/episodes' (Episodios de temporada). <OK>

//* 11.- Show cast - Mostrar elenco: Lista del elenco principal.
//* 'https://api.tvmaze.com/shows/1/cast' (Mostrar elenco). <OK>

//* 12.- Show crew - Mostrar equipo: Lista participación principal, creador, productor, etc.
//* 'https://api.tvmaze.com/shows/1/crew' <OK>

//* 13.- Show AKA's - Alias: Una lista de AKA (alias) para un programa.
//* 'https://api.tvmaze.com/shows/1/akas' (Mostrar AKA o alias). <OK>

//* 14.- Show images - Mostrar imagenes: lista de todas las imágenes disponibles, póster, banner, fondo.
//* 'https://api.tvmaze.com/shows/1/images' (Mostrar imagenes). <OK>

//* 15.- Show index - Mostrar índice: Lista todos los programas de la DBASE entre 0 y 250 por página.
//* 'https://api.tvmaze.com/shows' <OK>
//* 'https://api.tvmaze.com/shows?page=1' <OK>

//* 16.- Episode main information - Información principal del episodio:
//* 'https://api.tvmaze.com/episodes/1' (). <OK>
//* 'https://api.tvmaze.com/episodes/1?embed=show' <OK>

//* 17.- Person main information - Información principal de la persona:
//* 'https://api.tvmaze.com/people/1'(). <OK>
//* 'https://api.tvmaze.com/people/1?embed=castcredits' <OK>

//* 18.- Person cast credits - Persona emitida créditos: Créditos de reparto.
//* 'https://api.tvmaze.com/people/1/castcredits' <OK>
//* 'https://api.tvmaze.com/people/1/castcredits?embed=show' <OK>

//* 19.- Person crew credits - Créditos de tripulación persona: 
//* 'https://api.tvmaze.com/people/100/crewcredits' <OK>
//* 'https://api.tvmaze.com/people/100/crewcredits?embed=show' <OK>
//* ===============================================================================================
