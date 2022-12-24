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
        return this.getResources('https://run.mocky.io/v3/26b653f4-34d1-4263-8087-493a701077dc')
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
        return res.videoNews.map(this.news);
    }

    getColums = async () => {
        const res = await this.getAll()
        return res.colums.map(this.colums);
    }

    getPoliticsNews = async () => {
        const res = await this.getAll()
        return res.politics.map(this.news);
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

    colums = (colums) => {
        return {
            id: nextId(),
            name: colums.name,
            profession: colums.profession,
            text: colums.text,
            date: colums.date
        }
    }
}

export default NewsServices;