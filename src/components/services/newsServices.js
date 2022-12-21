import nextId from "react-id-generator"

class NewsServices {
    getResources = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAll = () => {
        return this.getResources('https://run.mocky.io/v3/beb3ac9f-a18d-495e-baf0-4b4bc3e67a5e')
    }

    getStatistics = async () => {
        const res = await this.getAll()
        return this.statistics(res.statistics[0]);
    }

    getNewsAll = async () => {
        const res = await this.getAll()
        return res.newsAll.map(this.news);
    }

    getEditorialChoice = async () => {
        const res = await this.getAll()
        return res.editorialChoice.map(this.news);
    }

    getRegionsNews = async () => {
        const res = await this.getAll()
        return res.regions.map(this.news);
    }

    getVideoNews = async () => {
        const res = await this.getAll()
        return res.VideoNews.map(this.news);
    }

    statistics = (amount) => {
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

    news = (news) => {
        return {
            id: nextId(),
            type: news.type,
            img: news.img,
            className: news.className,
            date: news.date,
            text: news.text
        }
    }
}

export default NewsServices;