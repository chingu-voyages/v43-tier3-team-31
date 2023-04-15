import DashboardNavbar from '@/components/dashboard/navbar/Navbar'
import DashboardSidebar from '@/components/dashboard/sidebar/DashboardSidebar'
import IngredientEmptyState from '@/components/ingredients-list/IngredientEmptyState'

import React from 'react'

const IngredientList = () => {
    return (
        <div>
            <DashboardNavbar />
            <div className='flex '>
                <DashboardSidebar />
                <IngredientEmptyState/>
            </div>
        </div>
    )
}

export default IngredientList