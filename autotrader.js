module.exports = (function() {
    return {
        url: 'https://www.autotrader.co.uk/car-search?sort=sponsored&postcode=sl43dr&price-to=5000&model=FIESTA&make=FORD&price-from=4500&onesearchad=Used&radius=1501&page=1#201804025148065',
        file: 'autotrader',
        spatula: {
            cast: 'text',
            name: 'search-url',
            follow: true,
            then: {
                select: '.listing-title a.listing-fpa-link',
                name: 'listings',
                cast: 'array',
                then: {
                    attrib: 'href',
                    name: 'url',
                    cast: 'text',
                    follow: true,
                    then: [{
                        name: 'title',
                        cast: 'text',
                        select: '.vehicle-title .vehicle-title__text'
                    }, {
                        cast: 'number',
                        select: '.gui-advert-price',
                        match: /[0-9.]/g,
                        name: 'price'
                    }, {
                        name: 'currency',
                        cast: 'text',
                        select: '.gui-advert-price',
                        match: /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/,
                    }, {
                        select: '.keyFacts__icon-manufactured-year < <',
                        then: [{
                            select: '.keyFacts__label',
                            match: /[0-9]{4}/,
                            name: 'year',
                            cast: 'number'
                        }, {
                            match: /\([0-9]{2}/,
                            then: {
                                match: /[0-9]/g,
                                name: 'reg',
                                cast: 'number'
                            }
                        }]
                    }, {
                        select: '.keyFacts__icon-body-type < <',
                        then: {
                            name: 'bodyType',
                            cast: 'text',
                            select: '.keyFacts__label'
                        }
                    }, {
                        select: '.keyFacts__icon-mileage < <',
                        then: {
                            select: '.keyFacts__label',
                            match: /[0-9]/g,
                            name: 'mileage',
                            cast: 'number'
                        }
                    }, {
                        select: '.keyFacts__icon-engine-size < <',
                        then: {
                            select: '.keyFacts__label',
                            match: /[0-9.]/g,
                            name: 'engineSize',
                            cast: 'number'
                        }
                    }, {
                        select: '.keyFacts__icon-transmission < <',
                        then: {
                            name: 'transmission',
                            cast: 'text',
                            select: '.keyFacts__label'
                        }
                    }, {
                        select: '.keyFacts__icon-fuel-type < <',
                        then: {
                            name: 'fuelType',
                            cast: 'text',
                            select: '.keyFacts__label'
                        }
                    }, {
                        select: '.keyFacts__icon-doors < <',
                        then: {
                            select: '.keyFacts__label',
                            match: /[0-9.]/g,
                            name: 'doors',
                            cast: 'number'
                        }
                    }, {
                        select: '.keyFacts__icon-seats < <',
                        then: {
                            select: '.keyFacts__label',
                            match: /[0-9.]/g,
                            name: 'seats',
                            cast: 'number'
                        }
                    }]
                }
            }
        }
    };
})();