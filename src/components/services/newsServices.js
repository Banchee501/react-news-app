class NewsServices {
    getResources = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAll = () => {
        return this.getResources('https://run.mocky.io/v3/4ae8012c-d708-4fd9-b49b-eac1466d7110')
    }

    getStatistics = async () => {
        const res = await this.getAll()
        return this.statistics(res.statistics[0]);
    }

    updateStatistic = () => {
        this.newsServices
            .getStatistics()
            .then(this.onStatLoaded)
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
}

export default NewsServices;