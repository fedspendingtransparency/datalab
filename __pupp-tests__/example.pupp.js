const siteRoot = "http://localhost:9001"

const pagesArray = [
	{
		pathname: "analyst-guide",
		heading: "Analyst's Guide to Federal Spending Data",
	},
	{
		pathname: "budget-function",
		heading: "Budget Function",
	},
	{
		pathname: "competition-in-contracting",
		heading: "Competition in Contracting",
	},
	{
		pathname: "contract-explorer",
		heading: "Contract Explorer",
	},
	{
		pathname: "dts",
		heading: "Visualizing the Daily Treasury Statement",
	},
	{
		pathname: "federal-account-explorer",
		heading: "Federal Account Explorer",
	},
	{
		pathname: "federal-covid-funding",
		heading: "THE FEDERAL RESPONSE TO COVID-19",
	},
	{
		pathname: "federal-employees",
		heading: "Federal Employees",
	},
	{
		pathname: "homelessness-analysis",
		heading: "Homelessness Analysis",
	},
	{
		pathname: "student-innovators-toolbox",
		heading: "Student Innovator's Toolbox",
	},
	{
		pathname: "404",
		heading: "Looks like you got lost in the data",
	},
]

describe("Homepage Test", () => {
	it("should return the correct response code", async () => {
		const pageCheck = async pageContent => {
			const content = await page.goto(`${siteRoot}/${pageContent.pathname}`, {
				waitUntil: "domcontentloaded",
				timeout: 0,
			})

			await expect(page, { timeout: 0 }).toMatch(pageContent.heading)

			expect(content._status).toBe(200)
		}

		const array = pagesArray
		for (let index = 0; index < array.length; index++) {
			await pageCheck(array[index])
		}
	})
})
