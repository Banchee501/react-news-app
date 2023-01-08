import nextId from "react-id-generator"
import { useHttp } from "../../hooks/http.hook"

const useNewsServices = () => {
    const {request} = useHttp();

    const getAll = () => {
        return request('https://run.mocky.io/v3/2e8f4326-0d7c-4fdb-9d49-07a66e63d4b1')
    }

    const getStatistics = async () => {
        const res = await getAll()
        return _statistics(res.statistics[0]);
    }

    const getCarousel = async () => {
        const res = await getAll()
        return res.newsCarousel.map(_news);
    }

    const getNewsAll = async () => {
        const res = await getAll()
        return res.newsAll.map(_news);
    }

    const getEditorialChoice = async () => {
        const res = await getAll()
        return res.editorialChoice.map(_news);
    }

    const getRegionsNews = async () => {
        const res = await getAll()
        return res.regions.map(_news);
    }

    const getVideoNews = async () => {
        const res = await getAll()
        return res.videoNews.map(_news);
    }

    const getColums = async () => {
        const res = await getAll()
        return res.colums.map(_colums);
    }

    const getPoliticsNews = async () => {
        const res = await getAll()
        return res.politics.map(_news);
    }

    const getPromo = async () => {
        const res = await getAll()
        return res.promo.map(_news);
    }

    const getEconomicsNews = async () => {
        const res = await getAll()
        return res.economics.map(_news);
    }

    const getLifestyleNews = async () => {
        const res = await getAll()
        return res.lifestyle.map(_news);
    }

    const _statistics = (amount) => {
        return {
            day: amount.day,
            soldier: amount.soldier,
            tanks: amount.tanks,
            artillery: amount.artillery,
            aircraft: amount.aircraft,
            mlrs: amount.mlrs,
            helicopter: amount.helicopter,
            afv: amount.afv,
        }
    }

    const _news = (news) => {
        return {
            id: nextId(),
            type: news.type,
            img: news.img,
            className: news.className,
            date: news.date,
            text: news.text
        }
    }

    const _colums = (colums) => {
        return {
            id: nextId(),
            name: colums.name,
            profession: colums.profession,
            text: colums.text,
            date: colums.date
        }
    }

    return {getStatistics, getCarousel, getNewsAll, getEditorialChoice, getRegionsNews, getVideoNews, getColums, getPoliticsNews, getPromo, getEconomicsNews, getLifestyleNews}
}

export default useNewsServices;