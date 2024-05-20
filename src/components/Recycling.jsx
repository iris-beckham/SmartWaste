import { useState, useEffect } from "react";
import { Filter } from 'lucide-react';
import { capitalizeFirstLetters } from '../helpers.js'
import RecyclingDosAndDonts from "./RecyclingDosAndDonts.jsx";


const Recycling = () => {
    const [recyclingBins, setRecyclingBins] = useState([]);
    //modal state for filter options: false = hidden, true = visible  
    const [optionsStatus, setOptionsStatus] = useState(false);
    const [filter, setFilter] = useState(false);
    const [borough, setBorough] = useState([]);
    const [filteredSites, setFilteredSites] = useState([]);
    useEffect(() => {
        fetch(`https://data.cityofnewyork.us/resource/sxx4-xhzg.json`)
            .then((res) => res.json())
            .then((data) => {
                setRecyclingBins([...new Set(data)])
                setFilteredSites([...new Set(data)])
                //NOTE: need to remove BROOKLYN PARK - PIER 1 duplicates
            });
    }, []);



    const displayFilterOptions = () => {
        setOptionsStatus(!optionsStatus);
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const handleBoroughFilterChange = (e) => {
        setBorough(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let copy = [...filteredSites];
        copy = [...copy.filter((site) => site.dsny_zone === borough)]
        if (filter === "paper") {
            copy = [...copy.filter((site) => site.paper_bins > 0)]
        } else if (filter === "mgp") {
            copy = [...copy.filter((site) => site.mgp_bins > 0)]
        }

        if (copy.length === 0) {
            setFilteredSites(recyclingBins);
            handleSubmit(e);
            //NOTE: user currently has to click "apply filters" twice to first reset then apply new filters
        }
        setFilteredSites([...copy])
    }

    return (
        <div className="min-h-screen mb-0">
            <div className="grid grid-cols-1 md:grid-cols-5 ">
                <RecyclingDosAndDonts />

                <div className="col-span-1 md:col-span-2 ">
                    <div className="bg-black m-5 rounded-xl ">
                        <div className="text-3xl text-white py-7 mx-5 text-center">
                            Recycling Drop Off Sites
                        </div>
                        <p className="flex justify-end mr-10 mb-2 text-white">
                            {filteredSites.length} Sites
                            <button onClick={() => displayFilterOptions()}><Filter /></button>
                        </p>
                        {optionsStatus ?
                            <div className="flex justify-end mr-10 mb-2">
                                <form action="" onSubmit={handleSubmit}>
                                    <select name="filter" value={filter} onChange={handleFilterChange}>
                                        <option value="all" >Any</option>
                                        <option value="paper">Paper</option>
                                        <option value="mgp">Glass</option>
                                        <option value="mgp">Metal</option>
                                        <option value="mgp">Plastic</option>
                                    </select>
                                    <select name="borough" value={borough} onChange={handleBoroughFilterChange}>
                                        <option value="BKN">Brooklyn North</option>
                                        <option value="BKS">Brooklyn South</option>
                                        <option value="BX">Bronx</option>
                                        <option value="MAN">Manhattan</option>
                                        <option value="QE">Queens East</option>
                                        <option value="QW">Queens West</option>
                                        <option value="SI">Staten Island</option>
                                    </select>
                                    <button className="text-white" type="submit">Apply Filters</button>
                                </form>
                            </div>
                            : ''}
                        <hr className="border-4 border-white mb-10 mx-5 rounded" />
                        <div className="overflow-y-auto h-72 grid gap-4">
                            {filteredSites.map((site) => {
                                const { site_location, partner, dsny_zone, paper_bins, mgp_bins, site_type } = site;
                                return (
                                    <div key={site_location + mgp_bins + paper_bins + site_type} className="bg-sky-300 mx-5 rounded-lg px-5 py-7 hover:scale-105 transition-transform duration-300">
                                        {partner === "N/A" ? "" : <p>{capitalizeFirstLetters(partner)}</p>}
                                        <p>{capitalizeFirstLetters(site_location)}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recycling