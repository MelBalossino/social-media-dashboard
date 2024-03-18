import data from "../../data/data.json"
import { OverviewCard, OverviewTodayCard } from "./OverviewCard"

const convertNumberToK = (number) => {
    if (number >= 10000) {
        number = number / 1000
        return `${number}k`
    }
    return number
}

export const OverviewContainer = () => {
    return (
        <section className=" absolute top-[191px] left-0 right-0">
            {
                data.overview.map(object =>
                    <OverviewCard
                        key={object.id}
                        user={object.user}
                        audienceType={object.audienceType}
                        audience={convertNumberToK(object.audience)}
                        network={object.network}
                        isUp={object.isUp}
                        today={object.today} />
                )
            }
        </section>
    )
}

export const OverviewTodayContainer = () => {
    return (
        <div>
            {
                data["overview-today"].map(object =>
                    <OverviewTodayCard
                        key={object.id}
                        network={object.network}
                        statsType={object.statsType}
                        stats={convertNumberToK(object.stats)}
                        porcentage={object.porcentage}
                        isUp={object.isUp} />
                )
            }
        </div>
    )
}