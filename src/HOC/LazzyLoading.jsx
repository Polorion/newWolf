import React from "react";

const LazyLoader = (Component) => {
    return (
        <div>
            <React.Suspense fallback={<div>Загрузка...</div>}>
                <Component/>
            </React.Suspense>
        </div>
    )
}

export default LazyLoader


