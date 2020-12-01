const siteRoot = 'http://localhost:9001';

const pagesArray = [
	{
		pathname: 'analyst-guide',
		heading: "Analyst's Guide to Federal Spending Data",
	},
	{
		pathname: 'budget-function',
		heading: 'Budget Function',
	},
	{
		pathname: 'contract-explorer',
		heading: 'Contract Federal Explorer',
	},
	{
		pathname: 'competition-in-contracting',
		heading: 'Competition in Contracting',
	},
	{
		pathname: 'dts',
		heading: 'Visualizing The Daily Treasury Statement',
	},
	{
		pathname: 'federal-account-explorer',
		heading: 'Federal Account Explorer',
	},
	{
		pathname: 'federal-covid-funding',
		heading: 'The Federal Response To COVID-19',
	},
	{
		pathname: 'federal-employees',
		heading: 'Federal Employees',
	},
	{
		pathname: 'homelessness-analysis',
		heading: 'Homelessness Analysis',
	},
	{
		pathname: 'student-innovators-toolbox',
		heading: 'Student Innovator',
	},
	{
		pathname: '404',
		heading: 'Looks like you got lost in the data',
	},
	{
		pathname: 'americas-finance-guide',
		heading:
			'How much money did the federal government collect and spend in 2020',
	},
	{
		pathname: 'americas-finance-guide/revenue',
		heading:
			'How does federal revenue compare to federal spending and the size of the economy',
	},
	{
		pathname: 'americas-finance-guide/revenue/categories',
		heading: 'Sources of Revenue for the Federal Government',
	},
	{
		pathname: 'americas-finance-guide/revenue/trends',
		heading: 'Federal Revenue Trends Over Time',
	},
	{
		pathname: 'americas-finance-guide/revenue/country-comparison',
		heading: 'Compare Federal Revenue of the United States to other Countries',
	},
	{
		pathname: 'americas-finance-guide/spending',
		heading:
			'How does federal spending compare to federal revenue and the size of the economy',
	},
	{
		pathname: 'americas-finance-guide/spending/categories',
		heading: 'Federal Spending by Category and Agency',
	},
	{
		pathname: 'americas-finance-guide/spending/trends',
		heading: 'Federal Spending Trends Over Time',
	},
	{
		pathname: 'americas-finance-guide/spending/country-comparison',
		heading: 'Compare Federal Spending of the United States to other Countries',
	},
	{
		pathname: 'americas-finance-guide/deficit',
		heading: 'What is the deficit and how does that compare to the national debt',
	},
	{
		pathname: 'americas-finance-guide/deficit/trends',
		heading: 'Federal Deficit Trends Over Time',
	},
	{
		pathname: 'americas-finance-guide/deficit/country-comparison',
		heading:
			'Compare the Federal Deficit of the United States to Other Countries',
	},
	{
		pathname: 'americas-finance-guide/debt',
		heading:
			'How does the national debt compare to the deficit and the size of the economy',
	},
	{
		pathname: 'americas-finance-guide/debt/trends',
		heading: 'Federal Debt Trends Over Time',
	},
	{
		pathname: 'americas-finance-guide/debt/analysis',
		heading: "Breakdown of the Federal Government's Debt",
	},
	{
		pathname: 'americas-finance-guide/debt/country-comparison',
		heading: 'Compare the Federal Debt of the United States to Other Countries',
	},
];

const timeout = 20000;

describe('Page test', () => {
	test(
		'each page should successfully load.',
		async () => {
			const pageCheck = async pageContent => {
				const content = await page.goto(`${siteRoot}/${pageContent.pathname}`, {
					waitUntil: 'domcontentloaded',
				});

				expect(content._status).toBe(200);
				await expect(page).toMatch(pageContent.heading, { timeout: timeout });
			};

			const array = pagesArray;
			for (let index = 0; index < array.length; index++) {
				await pageCheck(array[index]);
			}
		},
		timeout
	);
});
