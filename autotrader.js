module.exports = (function() {
    return {
        url: 'https://www.autotrader.co.uk/car-search?sort=sponsored&postcode=sl43dr&price-to=5000&model=FIESTA&make=FORD&price-from=4500&onesearchad=Used&radius=1501&page=1#201804025148065',
        file: 'autotrader',
        spatula: {
            selector: '.listing-title a.listing-fpa-link',
            name: 'listings',
            type: 'array',
            then: {
                attrib: 'href',
                type: 'attrib',
                then: {
                    type: 'resource',
                    then: [{
                        name: 'title',
                        type: 'string',
                        selector: '.vehicle-title .vehicle-title__text'
                    }, {
                        type: 'string',
                        selector: '.gui-advert-price',
                        match: /[0-9.]/g,
                        then: {
                            type: 'number',
                            name: 'price'
                        }
                    }, {
                        name: 'currency',
                        type: 'string',
                        selector: '.gui-advert-price',
                        match: /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/,
                        then: {
                            type: 'string',

                        }
                    }, {
                        selector: '.keyFacts__icon-manufactured-year < <',
                        then: [{
                            type: 'string',
                            selector: '.keyFacts__label',
                            then: [{
                                type: 'string',
                                match: /[0-9]{4}/,
                                then: {
                                    name: 'year',
                                    type: 'number'
                                }
                            }, {
                                type: 'string',
                                match: /\([0-9]{2}/,
                                then: {
                                    type: 'string',
                                    match: /[0-9]/g,
                                    then: {
                                        name: 'reg',
                                        type: 'number'
                                    }
                                }
                            }]
                        }]
                    }, {
                        selector: '.keyFacts__icon-body-type < <',
                        then: {
                            name: 'bodyType',
                            type: 'string',
                            selector: '.keyFacts__label'
                        }
                    }, {
                        selector: '.keyFacts__icon-mileage < <',
                        then: {
                            type: 'string',
                            selector: '.keyFacts__label',
                            match: /[0-9]/g,
                            then: {
                                name: 'mileage',
                                type: 'number'
                            }
                        }
                    }, {
                        selector: '.keyFacts__icon-engine-size < <',
                        then: {
                            type: 'string',
                            selector: '.keyFacts__label',
                            match: /[0-9.]/g,
                            then: {
                                name: 'engineSize',
                                type: 'number'
                            }
                        }
                    }, {
                        selector: '.keyFacts__icon-transmission < <',
                        then: {
                            name: 'transmission',
                            type: 'string',
                            selector: '.keyFacts__label'
                        }
                    }, {
                        selector: '.keyFacts__icon-fuel-type < <',
                        then: {
                            name: 'fuelType',
                            type: 'string',
                            selector: '.keyFacts__label'
                        }
                    }, {
                        selector: '.keyFacts__icon-doors < <',
                        then: {
                            type: 'string',
                            selector: '.keyFacts__label',
                            match: /[0-9.]/g,
                            then: {
                                name: 'doors',
                                type: 'number'
                            }
                        }
                    }, {
                        selector: '.keyFacts__icon-seats < <',
                        then: {
                            type: 'string',
                            selector: '.keyFacts__label',
                            match: /[0-9.]/g,
                            then: {
                                name: 'seats',
                                type: 'number'
                            }
                        }
                    }]
                }
            }
        }
    };
})();