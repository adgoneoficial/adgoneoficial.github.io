import { DEFAULT_URL } from "../Constant";
import { BaseLayoutProps } from "../interfaces/LayoutInterface";

function BaseLayout({route}: BaseLayoutProps) {
    return (
        <>
            {/*route?.culture && (<img src={`${DEFAULT_URL}${route.culture}`} alt={CULTURE_IMG_DESCRIPTION} className='absolute z-20 w-24 top-5 left-5' />)*/}
            {route?.textColor && route?.page && (<div className="absolute left-0 right-0 z-10 text-center bottom-2"><span className={`text-lg text-${route.textColor}`}>{route.page}</span></div>)}
            {route?.rightIcon && (<img src={`${DEFAULT_URL}${route.rightIcon}`} alt={route?.descriptiveSummary} style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translate(50%, -50%)',
                maxHeight: '30vh',
                zIndex: 0,
                }}
            />)}
        </>
    );
};

export default BaseLayout;