const newsTag = (className) => {
    switch(className) {
        case 'photo':
            return (
                <div className="tag">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5502_453)">
                    <path d="M11.814 2L10.872 0.778667C10.6843 0.537204 10.4442 0.341611 10.1698 0.206703C9.89532 0.0717943 9.59378 0.0011087 9.28797 0L6.71197 0C6.40617 0.0011087 6.10463 0.0717943 5.8302 0.206703C5.55576 0.341611 5.31562 0.537204 5.12797 0.778667L4.18597 2H11.814Z" fill="#979EA9"/>
                    <path d="M7.99998 11.9998C9.47274 11.9998 10.6666 10.8059 10.6666 9.33317C10.6666 7.86041 9.47274 6.6665 7.99998 6.6665C6.52722 6.6665 5.33331 7.86041 5.33331 9.33317C5.33331 10.8059 6.52722 11.9998 7.99998 11.9998Z" fill="#979EA9"/>
                    <path d="M12.6667 3.3335H3.33333C2.4496 3.33455 1.60237 3.68608 0.97748 4.31098C0.352588 4.93587 0.00105857 5.7831 0 6.66683L0 12.6668C0.00105857 13.5506 0.352588 14.3978 0.97748 15.0227C1.60237 15.6476 2.4496 15.9991 3.33333 16.0002H12.6667C13.5504 15.9991 14.3976 15.6476 15.0225 15.0227C15.6474 14.3978 15.9989 13.5506 16 12.6668V6.66683C15.9989 5.7831 15.6474 4.93587 15.0225 4.31098C14.3976 3.68608 13.5504 3.33455 12.6667 3.3335ZM8 13.3335C7.20887 13.3335 6.43552 13.0989 5.77772 12.6594C5.11992 12.2198 4.60723 11.5951 4.30448 10.8642C4.00173 10.1333 3.92252 9.32906 4.07686 8.55313C4.2312 7.77721 4.61216 7.06448 5.17157 6.50507C5.73098 5.94566 6.44372 5.5647 7.21964 5.41036C7.99556 5.25601 8.79983 5.33523 9.53073 5.63798C10.2616 5.94073 10.8864 6.45342 11.3259 7.11121C11.7654 7.76901 12 8.54237 12 9.3335C11.9989 10.394 11.5772 11.4108 10.8273 12.1608C10.0773 12.9107 9.06054 13.3324 8 13.3335Z" fill="#979EA9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5502_453">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                Новина з фото</div>
            )
        case 'breaking':
            return (
                <div className="tag label">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6019_1083)">
                    <path d="M10.4972 12.1696C10.4972 11.1696 9.8099 9.8029 8.5639 8.3209C8.49494 8.23863 8.40858 8.1727 8.31105 8.12785C8.21351 8.083 8.10724 8.06037 7.9999 8.06157C7.89177 8.06108 7.78482 8.08414 7.6865 8.12915C7.58818 8.17417 7.50085 8.24006 7.43057 8.32224C6.06657 9.92024 5.3999 11.3336 5.51523 12.4169C5.56062 12.7594 5.67808 13.0884 5.85987 13.3823C6.04166 13.6761 6.28365 13.9281 6.5699 14.1216C6.97483 14.4536 7.47671 14.645 7.9999 14.6669C8.66202 14.6662 9.29681 14.4029 9.765 13.9347C10.2332 13.4665 10.4965 12.8317 10.4972 12.1696Z" fill="#FF7534"/>
                    <path d="M11.0859 1.93323C10.5619 1.48789 10.0119 1.02123 9.45195 0.511893C9.23961 0.319114 8.9877 0.175075 8.71385 0.0898585C8.44001 0.00464206 8.15085 -0.019692 7.86661 0.0185598C7.59114 0.0550441 7.32703 0.151573 7.09295 0.301327C6.85888 0.451081 6.66054 0.650408 6.51195 0.885226C5.71754 2.21311 5.15569 3.66689 4.85061 5.18389C4.73126 5.01106 4.62517 4.82943 4.53328 4.64056C4.43892 4.44175 4.29682 4.26939 4.11965 4.13885C3.94248 4.00831 3.73575 3.92365 3.51791 3.89243C3.30007 3.8612 3.07789 3.88438 2.87119 3.9599C2.66448 4.03542 2.47969 4.16093 2.33328 4.32523C1.21548 5.46816 0.595856 7.00728 0.609947 8.60589C0.594488 10.2389 1.12557 11.8301 2.11869 13.1264C3.11181 14.4228 4.50993 15.3497 6.09061 15.7599C6.69584 15.9122 7.3172 15.991 7.94128 15.9946C7.14377 15.9648 6.37723 15.6781 5.75595 15.1772C5.32555 14.8743 4.96366 14.4843 4.69376 14.0325C4.42386 13.5806 4.25198 13.0771 4.18928 12.5546C4.03595 11.0812 4.78461 9.36589 6.41461 7.45656C6.61016 7.22734 6.85325 7.04342 7.12701 6.91759C7.40078 6.79176 7.69865 6.72703 7.99995 6.72789H8.00661C8.30703 6.72814 8.60378 6.79388 8.87619 6.92053C9.1486 7.04718 9.39013 7.2317 9.58395 7.46123C10.6093 8.67923 11.8326 10.4846 11.8326 12.1686C11.8311 13.139 11.4616 14.0728 10.7985 14.7814C10.1354 15.49 9.22818 15.9207 8.25995 15.9866C10.1744 15.9249 11.9896 15.1204 13.3211 13.7434C14.6526 12.3665 15.3958 10.5253 15.3933 8.60989C15.3899 5.58989 13.3953 3.89656 11.0859 1.93323Z" fill="#FF7534"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_6019_1083">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                Термінова новина</div>
            )
        case 'promo':
            return (
                <div className="tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_3541)">
                    <path d="M15.3333 10.6667C15.2301 10.6667 15.1284 10.6427 15.036 10.5967L13.7027 9.93C13.5444 9.85097 13.4241 9.71231 13.368 9.54452C13.312 9.37674 13.325 9.19358 13.404 9.03533C13.483 8.87709 13.6217 8.75672 13.7895 8.70071C13.9573 8.6447 14.1404 8.65763 14.2987 8.73667L15.632 9.40333C15.7666 9.4704 15.8745 9.581 15.9383 9.71716C16.0021 9.85332 16.018 10.0071 15.9834 10.1534C15.9488 10.2997 15.8658 10.43 15.7478 10.5232C15.6297 10.6164 15.4837 10.667 15.3333 10.6667ZM14.298 4.6L15.6313 3.93333C15.7896 3.8543 15.9099 3.71564 15.966 3.54786C16.022 3.38007 16.009 3.19691 15.93 3.03867C15.851 2.88042 15.7123 2.76005 15.5445 2.70404C15.3767 2.64803 15.1936 2.66097 15.0353 2.74L13.702 3.40667C13.5438 3.4857 13.4234 3.62436 13.3674 3.79214C13.3114 3.95993 13.3243 4.14309 13.4033 4.30133C13.4824 4.45958 13.621 4.57995 13.7888 4.63596C13.9566 4.69197 14.1398 4.67903 14.298 4.6ZM16 6.66667C16 6.48986 15.9298 6.32029 15.8047 6.19526C15.6797 6.07024 15.5101 6 15.3333 6H14C13.8232 6 13.6536 6.07024 13.5286 6.19526C13.4036 6.32029 13.3333 6.48986 13.3333 6.66667C13.3333 6.84348 13.4036 7.01305 13.5286 7.13807C13.6536 7.2631 13.8232 7.33333 14 7.33333H15.3333C15.5101 7.33333 15.6797 7.2631 15.8047 7.13807C15.9298 7.01305 16 6.84348 16 6.66667ZM12 12.6667V0.666667C12 0.489856 11.9298 0.320286 11.8047 0.195262C11.6797 0.0702379 11.5101 0 11.3333 0C11.1565 0 10.987 0.0702379 10.8619 0.195262C10.7369 0.320286 10.6667 0.489856 10.6667 0.666667C10.6667 2.63267 8.94467 3.33333 7.33333 3.33333H2.66667C1.95942 3.33333 1.28115 3.61428 0.781049 4.11438C0.280952 4.61448 0 5.29276 0 6L0 7.33333C0 8.04058 0.280952 8.71885 0.781049 9.21895C1.28115 9.71905 1.95942 10 2.66667 10H7.33333C8.94467 10 10.6667 10.7007 10.6667 12.6667C10.6667 12.8435 10.7369 13.013 10.8619 13.1381C10.987 13.2631 11.1565 13.3333 11.3333 13.3333C11.5101 13.3333 11.6797 13.2631 11.8047 13.1381C11.9298 13.013 12 12.8435 12 12.6667ZM5.45733 11.3333H2.66667C2.35628 11.3321 2.04708 11.2947 1.74533 11.222L3.412 14.9433C3.55198 15.2579 3.78012 15.5251 4.06882 15.7126C4.35753 15.9001 4.6944 16 5.03867 16C5.31257 15.9996 5.58202 15.9307 5.82248 15.7996C6.06293 15.6684 6.26673 15.4791 6.41532 15.249C6.5639 15.0189 6.65254 14.7553 6.67315 14.4822C6.69376 14.2091 6.6457 13.9351 6.53333 13.6853L5.45733 11.3333Z" fill="#979EA9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1_3541">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                Промо</div>
            )
        case 'online':
            return (
                <div className="tag label">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.369355 1.45353C0.369883 0.650207 1.02153 -0.000588762 1.82486 -6.0714e-05C5.58358 0.00240971 9.18765 1.49665 11.8455 4.15447C14.5033 6.81229 15.9975 10.4164 16 14.1751C16.0005 14.9784 15.3497 15.6301 14.5464 15.6306C13.7431 15.6311 13.0914 14.9803 13.0909 14.177C13.0889 11.1891 11.9011 8.32424 9.78842 6.21151C7.6757 4.09879 4.81079 2.911 1.82295 2.90904C1.01962 2.90851 0.368827 2.25686 0.369355 1.45353Z" fill="#FF7534"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.369354 7.48043C0.369354 6.6771 1.02058 6.02588 1.8239 6.02588C2.89419 6.02588 3.954 6.23669 4.94281 6.64627C5.93163 7.05585 6.83009 7.65618 7.5869 8.41299C8.3437 9.16979 8.94403 10.0683 9.35361 11.0571C9.7632 12.0459 9.974 13.1057 9.974 14.176C9.974 14.9793 9.32278 15.6305 8.51945 15.6305C7.71613 15.6305 7.0649 14.9793 7.0649 14.176C7.0649 13.4877 6.92934 12.8062 6.66596 12.1703C6.40257 11.5345 6.01652 10.9567 5.52985 10.47C5.04318 9.98336 4.46542 9.59731 3.82955 9.33393C3.19368 9.07054 2.51216 8.93498 1.8239 8.93498C1.02058 8.93498 0.369354 8.28376 0.369354 7.48043Z" fill="#FF7534"/>
                    <path d="M1.82397 15.5153C2.56354 15.5153 3.16308 14.9158 3.16308 14.1762C3.16308 13.4366 2.56354 12.8371 1.82397 12.8371C1.0844 12.8371 0.484863 13.4366 0.484863 14.1762C0.484863 14.9158 1.0844 15.5153 1.82397 15.5153Z" fill="#FF7534"/>
                    </svg>
            Онлайн</div>
                )
        case 'interview':
            return (
                <div className="tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6019_1237)">
                    <path d="M6.22666 7.19533C5.59234 6.39445 5.27825 5.38643 5.3454 4.36699C5.41254 3.34755 5.85611 2.38943 6.59 1.67866L7.012 1.25599C7.72281 0.522392 8.68084 0.0790551 9.70013 0.012039C10.7194 -0.0549772 11.7272 0.259108 12.528 0.893328C12.9563 1.24849 13.3051 1.68985 13.5516 2.18869C13.798 2.68753 13.9368 3.23268 13.9587 3.78866C13.9821 4.34225 13.8905 4.89468 13.6895 5.41105C13.4886 5.92742 13.1828 6.3965 12.7913 6.78866L12.1247 7.45533C11.3733 8.20506 10.3554 8.62649 9.294 8.62733C9.23666 8.62733 9.17933 8.626 9.122 8.62333C8.56625 8.60159 8.02129 8.46322 7.52248 8.2172C7.02368 7.97119 6.58219 7.62303 6.22666 7.19533ZM12.5047 10.6667C12.0456 10.6656 11.5908 10.7555 11.1666 10.9311C10.7424 11.1067 10.3573 11.3647 10.0333 11.69C9.09203 12.6367 7.97227 13.3873 6.73889 13.8982C5.50551 14.4092 4.18302 14.6704 2.848 14.6667H2.08133C1.9334 14.6669 1.78873 14.6232 1.66565 14.5411C1.54257 14.4591 1.44661 14.3423 1.38992 14.2057C1.33324 14.069 1.31838 13.9187 1.34724 13.7736C1.37609 13.6285 1.44735 13.4952 1.552 13.3907L2.01866 12.924C3.17617 12.8463 4.26602 12.3507 5.08533 11.5293L7.12133 9.49333C6.38192 9.16483 5.72695 8.6724 5.206 8.05333C4.91484 7.70424 4.6722 7.31741 4.48466 6.90333L2.46666 8.91933C1.64507 9.73846 1.14938 10.8284 1.072 11.986L0.60533 12.4527C0.315629 12.7442 0.118747 13.1149 0.0395182 13.5182C-0.0397104 13.9215 0.00226361 14.3392 0.160146 14.7186C0.318027 15.0981 0.584745 15.4223 0.926655 15.6503C1.26856 15.8784 1.67035 16 2.08133 16H2.848C4.35811 16.0041 5.85404 15.7087 7.2492 15.1308C8.64437 14.5529 9.91108 13.704 10.976 12.6333C11.2783 12.331 11.6635 12.1252 12.0828 12.0418C12.5021 11.9583 12.9367 12.0011 13.3317 12.1646C13.7267 12.3282 14.0643 12.6051 14.302 12.9605C14.5396 13.3159 14.6665 13.7338 14.6667 14.1613V15.3333C14.6667 15.5101 14.7369 15.6797 14.8619 15.8047C14.9869 15.9298 15.1565 16 15.3333 16C15.5101 16 15.6797 15.9298 15.8047 15.8047C15.9298 15.6797 16 15.5101 16 15.3333V14.1613C15.9988 13.2347 15.6301 12.3465 14.9748 11.6914C14.3196 11.0362 13.4312 10.6677 12.5047 10.6667Z" fill="#979EA9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_6019_1237">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
            Інтерв'ю</div>
                )
        case 'exclusive':
            return (
                <div className="tag label">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.05871 11.3745C0.0949493 8.19412 1.13099 4.70048 3.68496 2.5802C5.94981 0.700866 9.15432 0.194891 11.901 1.25503C14.5996 2.29107 16.5753 4.74867 17.0572 7.59177C17.5631 10.4831 16.3825 13.4948 14.1177 15.3501C11.2987 17.639 7.22679 17.7354 4.23913 15.6874C3.85362 15.4223 3.51631 16.0488 3.87772 16.2897C6.769 18.2654 10.6481 18.3859 13.6358 16.5307C16.3584 14.8441 17.9968 11.7841 17.8764 8.60372C17.7559 5.4474 15.9247 2.48383 13.1298 1.01409C10.2867 -0.455649 6.769 -0.335178 4.09456 1.42369C0.745489 3.59215 -0.772437 7.76043 0.384078 11.5673C0.504548 12.001 1.17918 11.8082 1.05871 11.3745Z" fill="#182840"/>
                    <path d="M12.9369 9.44726C12.6718 11.6398 10.6479 13.2059 8.45538 12.9409C6.26282 12.6759 4.6967 10.652 4.96174 8.45941C5.22677 6.26685 7.25067 4.70073 9.44323 4.96577C11.6358 5.2308 13.2019 7.23061 12.9369 9.44726Z" fill="#FF7534"/>
                    </svg>
            Ексклюзив</div>
                )    
        case 'video':
            return (
                <div className="tag">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.03596 5.24155L10.4774 6.99059V6.99184C10.6394 7.10798 10.7711 7.25977 10.8619 7.43489C10.9527 7.61002 11 7.80358 11 7.99989C11 8.19621 10.9527 8.38976 10.8619 8.56489C10.7711 8.74002 10.6394 8.8918 10.4774 9.00795L8.03596 10.757C7.84542 10.894 7.6197 10.9766 7.38393 10.9957C7.14816 11.0148 6.91159 10.9696 6.70056 10.8652C6.48952 10.7607 6.31229 10.6011 6.18861 10.404C6.06493 10.207 5.99963 9.98031 6 9.74918V6.24936C6.0002 6.01845 6.06583 5.79211 6.18963 5.59541C6.31343 5.39872 6.49057 5.23936 6.7014 5.135C6.91223 5.03063 7.14852 4.98535 7.38408 5.00416C7.61964 5.02296 7.84527 5.10513 8.03596 5.24155Z" fill="#979EA9"/>
                    </svg>
            Новина з відео</div>
                )
        default:
            <></>
        break;
    }
}

export default newsTag;



