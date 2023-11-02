import { 
    BackgroundContent, 
    CardInfoDetail, 
    BreadCrumbs, 
    Spinner
} from "../../components";
import { useParams } from "react-router-dom";
import { useFetchDetail } from "../../hooks/useFetchDetail";
import "./styles.scss";

export default function DetailProduct(){
    const { id } = useParams();
    const { detail, isLoading } = useFetchDetail(id);

    if( isLoading ){
        return (
           <Spinner/> 
        )
    };

    return (
        <>
            <BreadCrumbs/>
            <BackgroundContent>
                <div className="detail-container">
                    <div className="left-column">
                        {/* Content column left */}
                        <div className="image-container">
                            <img src={detail.item.picture} alt="Image product" />
                        </div>
                        <p className="title">Descripción del producto</p>
                        <p className="description">{detail?.description ?? "Sin descripción"}</p>
                    </div>
                    <div className="right-column">
                        {/* Content column right */}
                        <CardInfoDetail {...detail.item}/>
                    </div>
                </div>         
            </BackgroundContent>
        </>
    )
};