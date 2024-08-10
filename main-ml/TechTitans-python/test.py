import asyncio
import nest_asyncio
from pyppeteer import launch

# Apply the nest_asyncio patch
nest_asyncio.apply()

async def main():
    browser = None
    try:
        browser = await launch(executablePath="C:\\Users\\mohan\\Downloads\\Chrome.exe")
        page = await browser.newPage()
        await page.goto('https://example.com')
        await page.screenshot({'path': 'example.png'})
        print('Screenshot taken and saved as example.png')
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        if browser:
            await browser.close()

# Run the async main function
asyncio.run(main())
