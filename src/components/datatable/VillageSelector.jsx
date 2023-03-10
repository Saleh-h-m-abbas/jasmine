import React from "react";

const VillageSelector = ({ villages, handleVillageChange }) => {
    return (
        <div>
            <label htmlFor="village-select">Village:</label>
            <select id="village-select" onChange={handleVillageChange}>
                <option value="">Select a village</option>
                {villages.map((village) => (
                    <option key={village} value={village}>
                        {village}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default VillageSelector;
