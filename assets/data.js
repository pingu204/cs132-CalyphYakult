var deptEntries = [
    {
        "id" : "da",
        "name" : "Department of Agriculture (DA)",
        "description" : [
            "The <span class='emph text-primary'>Department of Agriculture</span> has regional offices and regional field units. These would be added together based on their regions. Additional allocations such as to the Bureaus of Agricultural Research, Animal Industry, and Fish Industry would be disregarded as they are presumed to be national bureaus catering to the entire national need. There is also a considerable allocation towards the Central Office and blank agencies. These allocations are primarily for national agricultural programs such as the Swine Industry Recovery Project, Agro-Industry Modernization Credit and Financing Program and the Rice Competitiveness Enhancement Program. The specific budgeting and regional allocation for each program listed is not provided in the budget or the General Appropriations Act, hence the budget towards the Central Office and blank agencies is presumed to also be national and disregarded."
        ]
    },
    {
        "id" : "dar",
        "name" : "Department of Agrarian Reform (DAR)",
        "description" : [
            "The <span class='emph text-primary'>Department of Agrarian Reform</span> handles 81 provincial offices (PARO). The regional offices are also provided with budget allocations. There are 2 approaches to this data. Either the provincial offices are added based on their respective regions and added with the regional office budgets, or the regional office’s budget is split amongst its provinces or just disregarded. Further consultation would determine the approach taken towards this data."
        ]
    },
    {
        "id" : "denr",
        "name" : "Department of Environment and Natural Resources (DENR)",
        "description" : [
            "The <span class='emph text-primary'>Department of Environment and Natural Resources</span> has around 76 Provincial Environment and Natural Resources Offices (PENRO) across the country. Each of these have their own respective budgets. Apart from the PENRO’s, there are also regional offices which are weirdly split into “Regional Office” and “Regional Office - Proper”. Further consultation would determine the approach taken towards this, whether it would be focused on the regions or provinces.",
            "There are also other bureaus within the DENR such as the Land Management Bureau, Biodiversity Management Bureau and the Forest Management Bureau. These bureaus' services are spread throughout the country and are not able to be divided into regions or provinces, hence their budget allocations will be disregarded.",
            "Just like every other department in the Philippines, there is a considerable amount allocated to the Central Office, which has no regional affiliation. The amounts allocated to the Central Office and blank agencies are primarily for capital outlays of sewer systems, buildings, ICT software and reforestation programs. There are also amounts allocated to maintenance and personnel, however these allocations do not give details where these programs are being taken place or spent on, hence they cannot be divided into regions which are important for the study. Hence the budgets allocated to the Central Office and blank agencies will be disregarded as they are not able to be broken down into specific regions to find any inequalities."
        ]
    },
    {
        "id" : "deped",
        "name" : "Department of Education (DepEd)",
        "description" : [
            "The <span class='emph text-primary'>Department of Education</span> handles around 9400 public schools nationwide. This number changes per year as new schools open and old schools close. There is also the issue of schools changing their names which could be hard to keep track of. The Department of Education also does not publicly release the number of students per public school. They do however provide the number of enrollees per region. Due to this limitation, gathering any meaningful conclusions would require grouping the 9400 schools into their respective regions to draw correlations between their budgets and the student population of each region.",
            "Apart from the 9400 public schools, DepEd has also allocated billions towards its regional offices. However a large chunk of 148,777,641,000 pesos was allocated to the Central Office. This budget alone dwarfs most other executive departments. This budget is primarily allocated to building new schools, the Senior High School Voucher Program, Educational Service Contracting (ESC) Program for Private Junior High School, textbooks and other instructional materials, the School-Based Feeding Program (SBFP) and the Computerization Program. The budget does not provide specific details as to how or where these funds for each program or school building are allocated. Hence it would prove to be hard to affiliate the budget of the Central Office to any region, therefore despite its large amount, it would be disregarded in this study."
        ]
    },
    {
        "id" : "dhsud",
        "name" : "Department of Human Settlements and Urban Development (DHSUD)",
        "description" : [
            "The <span class='emph text-primary'>Department of Human Settlements and Urban Development (DHSUD)</span> has allocations for both Regional Adjudication Branches and Regional Offices. These would be added together to represent the budget of each region for the DHSUD. Notably in 2020 however, the budget for the DHSUD was not split per region but for groups of regions such as Central Visayas Region (Regions VII and VIII), and Northern Luzon Region (CAR, Regions I and II). Due to this weird budgeting during 2020, the budgets in 2020 could be split amongst each region appropriately based on what we think is appropriate, or the budgets of 2021-2024 could be aggregated to the groupings created in 2020. Further consultation is needed to determine the approach to take."
        ]
    },
    {
        "id" : "dict",
        "name" : "Department of Information and Communications Technology (DICT)",
        "description" : [
            "The <span class='emph text-primary'>Department of Information and Communications Technology</span> has 16 regional offices with their respective budgets. The Central Office however is allocated nearly 274 times the amount compared to some regional offices. This huge budget for the Central Office is primarily allocated to the Free Internet Wi-Fi Connectivity in Public Places program, National Government Data Center Infrastructure, and the National Broadband Plan. The Central Office’s budget will be considered and checked if it was appropriated equally by correlating the budget with the new WiFi sites created in each region."
        ]
    },
    {
        "id" : "dilg",
        "name" : "Department of the Interior and Local Government (DILG)",
        "description" : [
            "The <span class='emph text-primary'>Department of the Interior and Local Government</span> has regional offices. However, just like the other departments, its Central Office has a huge budget allocation of nearly 192 billion pesos. Most of this is in the basic, longevity and allowance pays of police and other DILG personnel. The budget does not provide specific details as to how much of this pay/salary is allocated per region, rather each region has allocated budgets primarily for fuel, oil, materials, electricity and funds to construct new police stations. If data is found for the number of police personnel per region, then the Central Office’s budget could be considered, but for now it is disregarded."
        ]
    },
    {
        "id" : "dof",
        "name" : "Department of Finance (DOF)",
        "description" : [
            "The <span class='emph text-primary'>Department of Finance</span> has its own regional offices plus “Revenue Regional Offices” together with “Collection Districts” tied to important ports throughout the country. Some of these ports include Port of Manila, Port of Cebu, NAIA and many others. The regional offices and revenue regional offices will be added together for each region, then the collection districts will be added to the corresponding regions their ports are located in.",
            "Apart from these offices, the Central Office has around 13 billion pesos allocated in 2024. However most of this amount is for the Bureaus of Internal Revenue, the Treasury and Customs. The allocations for these bureaus do not really have details on which regions they've invested in and hence cannot be really used for this study."
        ]
    },
    {
        "id" : "doh",
        "name" : "Department of Health (DOH)",
        "description" : [
            "The <span class='emph text-primary'>Department of Health</span> has around 120~ public hospitals with budget allocations apart from the regional centers for health development. These hospitals must be grouped based on which region they’re situated in to draw meaningful conclusions between the appropriated health budgets and the regional populations. It would be quite hard to determine how many people certain hospitals could tend to using some sort of radius-based population checking, hence grouping these hospitals by regions seems the most logical.",
            "Apart from the public hospitals, the DOH has around 158 billion pesos allocated for its central office. 50 billion pesos are allocated to Medical Assistance to Indigent and Financially - Incapacitated Patients. Around 92 billion pesos is also allocated to a mix of Public Health Emergency Benefits and Allowances, the National Health Workforce Support System (NHWSS), the Health Facilities Enhancement  Program and the Cancer Assistance Fund. The DOH does not release information about how much of this money goes to which people or what hospitals or regions. Hence it is quite hard to group these allocations regionally, which means it cannot really be used for this study."
        ]
    },
    {
        "id" : "doj",
        "name" : "Department of Justice (DOJ)",
        "description" : [
            "The <span class='emph text-primary'>Department of Justice</span> has regional offices with their corresponding budgets, however they have budget allocations for certain jails as well. Most notably this includes New Bilibid Prison with a 6,033,975,000 peso budget. Considering it a considerable outlier, based on further consultation this budget could either be disregarded or added to the NCR’s budget. This is because Bilibid Prison is located within NCR.",
            "Apart from these offices and prisons, the Central Office has around 10 billion pesos allocated. This money is allocated primarily for prosecution, investigation and free legal services. We cannot really tell how the DOJ allocates this money per region hence it will be disregarded for this study."
        ]
    },
    {
        "id" : "dole",
        "name" : "Department of Labor and Employment (DOLE)",
        "description" : [
            "The <span class='emph text-primary'>Department of Labor and Employment</span> handles numerous schools for arts, trades and technical skills and they also handle regional offices. However these schools used to be under the Department of Trade and Industry. This is because President Marcos transferred TESDA to DOLE in 2022. Due to this change, we moved these schools and their budgets from DTI to DOLE in the 2020-2021 budgets.",
            "In regards to its Central Office, most of it is allocated to TESDA scholarships, Livelihood and Emergency Employment and other programs. We cannot know how much of these programs are allocated per region hence the Central Office’s budget will be disregarded."
        ]
    },
    {
        "id" : "dost",
        "name" : "Department of Science and Technology (DOST)",
        "description" : [
            "The <span class='emph text-primary'>Department of Science and Technology</span> has their own regional offices, but also handles the Philippine Science High School System. The campuses of PSHS and their respective budgets will be added to each of the regions they are located in as the campuses within each regions provide a greater access of quality education to each of their respective populations.",
            "The Central Office of the DOST is primarily allocated for science scholarship programs and research. As this is hard to categorize by region, the central office’s budget will be disregarded. "
        ]
    },
    {
        "id" : "dotr",
        "name" : "Department of Transportation (DOTr)",
        "description" : [
            "The <span class='emph text-primary'>Department of Transportation</span> has its own regional offices for its own, the LTO and LTFRB. It also weirdly has allocations for regions, which are not the same as the regional offices. These will all be added together for each region.",
            "The DOTr's Central Office unlike the other departments does provide some more specific details on how it spends its money. Some notable expenses are subsidies for the MRT and LRT and some other for airports and ports. These expenses will be added to the respective regions they are generally located in. The other expenses however such as sea operations and motor vehicle registration will not be considered."
        ]
    },
    {
        "id" : "dpwh",
        "name" : "Department of Public Works and Highways (DPWH)",
        "description" : [
            "The <span class='emph text-primary'>Department of Public Works and Highways</span> has District Engineering Offices all across the country. These range from being within cities to provincial. They can be grouped into around 95 data entries with corresponding budgets and populations. They also handle regional offices which could be divided to their respective provinces or the provinces could all be added to their corresponding regions. Further consultation will decide this approach.",
            "Their Central Office has a big budget and is very detailed in its expenses unlike other executive departments. The expenses are typically for large construction projects such as the Davao City Bypass or expressways. Given this long list of expenses, we can group each of the Central Office's expenses into their corresponding provinces or regions. We can do this by inputting the list of Central Office expenses to a program which would find the location of each construction project by comparing the text with a list of locations or through AI. Other expenses would be disregarded."
        ]
    },
    {
        "id" : "dswd",
        "name" : "Department of Social Welfare and Development (DSWD)",
        "description" : [
            "The <span class='emph text-primary'>Department of Social Work and Development</span> have regional offices and their respective budgets. We could ignore the Central Office's huge budget as it is mostly concentrated in big national programs like AKAP, Protective Services, Pantawid Pamilyang Pilipino Program, etc. We cannot really find out how these programs allocate their spendings regionally so we could just ignore them as they are national programs."
        ]
    },
    {
        "id" : "dti",
        "name" : "Department of Trade and Industry (DTI)",
        "description" : [
            "The <span class='emph text-primary'>Department of Trade and Industry</span> has regional offices and extension offices across the country. The extension offices' budgets will be added to the regional offices they are located within. The Central Office's budget is focused more on subsidies, and support to NGOs, as such it will be ignored for this study."
        ]
    },
    {
        "id" : "neda",
        "name" : "National Economic and Development Authority (NEDA)",
        "description" : [
            "The <span class='emph text-primary'>National Economic and Development Authority</span> has regional offices, region development councils, and regional statistical services offices. The budgets of each of these will be added together to their respective regions. The Central Office’s budget of NEDA will be ignored as it is mostly focused on the Philippine Statistics Authority and their expenses for censuses and the Philippine Identification System. These services are typically for the entire nation and hence cannot be regionalized."
        ]
    }
]

var graphEntries = [
    {
        "acronym" : "DA",
        "id" : "da",
        "title" : "DA's Allocation per Metric Ton of Agri Production",
        "filename" : "DA - Budget Allocation (PHP) per Volume of Agri-Fish Production",
    },
    {
        "acronym" : "DENR",
        "id" : "denr",
        "title" : "DENR's Allocation per GRDP",
        "filename" : "DENR - Budget Allocation (PHP) per GRDP",
    },
    {
        "acronym" : "DHSUD",
        "id" : "dhsud",
        "title" : "DHSUD's Allocation per Person",
        "filename" : "DHSUD - Pesos per Person",
    },
    {
        "acronym" : "DICT",
        "id" : "dict",
        "title" : "DICT's Allocation per GRDP",
        "filename" : "DICT - Budget Allocation (PHP) per Million Pesos of GRDP",
    },
    {
        "acronym" : "DILG",
        "id" : "dilg",
        "title" : "DILG's Allocation per Person",
        "filename" : "DILG - Pesos per Person",
    },
    {
        "acronym" : "DOF",
        "id" : "dof",
        "title" : "DOF's Allocation per GRDP",
        "filename" : "DOF - Allocation per GRDP",
    },
    {
        "acronym" : "DOH",
        "id" : "doh",
        "title" : "DOH's Allocation per Person",
        "filename" : "DOH - Pesos per Person",
    },
    {
        "acronym" : "DOJ",
        "id" : "doj",
        "title" : "DOJ's Allocation per Person",
        "filename" : "DOJ - Pesos per Person",
    },
    {
        "acronym" : "DOLE",
        "id" : "dole",
        "title" : "DOLE's Allocation per Person",
        "filename" : "DOLE - Pesos per Person",
    },
    {
        "acronym" : "DOST",
        "id" : "dost",
        "title" : "DOST's Allocation per GRDP",
        "filename" : "DOST - Allocation per GRDP",
    },
    {
        "acronym" : "DOTr",
        "id" : "dotr",
        "title" : "DOTr's Allocation per Person",
        "filename" : "DOTr - Pesos per Person",
    },
    {
        "acronym" : "DPWH",
        "id" : "dpwh",
        "title" : "DPWH's Allocation per Person",
        "filename" : "DPWH - Pesos per Person",
    },
    {
        "acronym" : "DSWD",
        "id" : "dswd",
        "title" : "DSWD's Allocation per Person in Poverty",
        "filename" : "DSWD - Pesos per Person in Poverty",
    },
    {
        "acronym" : "DTI",
        "id" : "dti",
        "title" : "DTI's Allocation per GRDP",
        "filename" : "DTI - Budget Allocation (PHP) per GRDP",
    },
    {
        "acronym" : "NEDA",
        "id" : "neda",
        "title" : "NEDA's Allocation per GRDP",
        "filename" : "NEDA - Budget Allocation (PHP) per GRDP",
    },
]

depedBudgetEntries = [
    {
        "acronym" : "DepEdEnrollees",
        "id" : "deped-enrollees",
        "title" : "DepEd's Allocation Adjusted to the Number of Enrollees",
        "filename" : "DepED - Budget Allocation (PHP) per Enrollee",
    },
    {
        "acronym" : "DepEdSchools",
        "id" : "deped-schools",
        "title" : "DepEd's Allocation Adjusted to the Number of Schools",
        "filename" : "DepED - Budget Allocation (PHP) per School",
    }
]