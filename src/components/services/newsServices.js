import nextId from "react-id-generator"
import { useHttp } from "../../hooks/http.hook"

const useNewsServices = () => {
    const {request} = useHttp();

    const getAll = () => {
        return request('https://run.mocky.io/v3/5a0b2c1e-11aa-46ef-ab24-a62ea5ce1801')
    }

    const getStatistics = async () => {
        const res = await getAll()
        return statistics(res.statistics[0]);
    }

    const getCarousel = async () => {
        const res = await getAll()
        return res.newsCarousel.map(news);
    }

    const getNewsAll = async () => {
        const res = await getAll()
        return res.newsAll.map(news);
    }

    const getEditorialChoice = async () => {
        const res = await getAll()
        return res.editorialChoice.map(news);
    }

    const getRegionsNews = async () => {
        const res = await getAll()
        return res.regions.map(news);
    }

    const getVideoNews = async () => {
        const res = await getAll()
        return res.videoNews.map(news);
    }

    const getColums = async () => {
        const res = await getAll()
        return res.colums.map(colums);
    }

    const getPoliticsNews = async () => {
        const res = await getAll()
        return res.politics.map(news);
    }

    const getPromo = async () => {
        const res = await getAll()
        return res.promo.map(news);
    }

    const getEconomicsNews = async () => {
        const res = await getAll()
        return res.economics.map(news);
    }

    const getLifestyleNews = async () => {
        const res = await getAll()
        return res.lifestyle.map(news);
    }

    const statistics = (amount) => {
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

    const news = (news) => {
        return {
            id: nextId(),
            type: news.type,
            img: news.img,
            className: news.className,
            date: news.date,
            text: news.text
        }
    }

    const colums = (colums) => {
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