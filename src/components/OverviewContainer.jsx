import data from "../../data/data.json"
import OverviewCard from "./OverviewCard"

const OverviewContainer = () => {
  return (
    <section>
        { 
        data.overview.map(object =>
        <OverviewCard 
        key={object.id}
        user={object.user}
        audienceType={object.audienceType}
        audience={object.audience} />
        )
}
    </section>
  )
}

export default OverviewContainer