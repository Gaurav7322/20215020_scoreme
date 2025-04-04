PDF Table Extractor is a Python-based tool designed to pull tables from PDF documents and convert them into well-organized Excel files. Unlike tools like Tabula or Camelot, this extractor works independently and supports a variety of table formats, including those that are irregular or without borders.

🚀 Key Features

Extracts tables from PDFs using advanced Python libraries
Supports complex and irregular table layouts
Automatically detects and adjusts for rotated pages
Cleans and organizes data after extraction
Saves the extracted data as Excel (.xlsx) files
Offers a user-friendly interface through a Streamlit web app
🛠 Setup

To get started, make sure you install the necessary libraries. These include tools for reading PDFs, handling data, and building the web interface.

💻 How to Use

In Notebook Environments:
You can run the extractor directly in a notebook for a simple, script-based experience. Just provide your PDF file, and the tool will save the extracted tables into an Excel file.

Using the Streamlit App:
You can also use the tool as a web application by launching it through Streamlit. Once open in your browser, you can upload a PDF, extract the tables, and download the results in Excel format.

📂 Project Structure

The main script handles the core functionality
Documentation is included to help understand the tool
A requirements file lists all the necessary packages
There's a dedicated folder for input PDF files
Extracted Excel files are saved in a separate output folder

🔥 Example Output

![Screenshot 2025-03-17 164514](https://github.com/user-attachments/assets/3aae5edd-9554-4d1c-b175-e24ee6ac8f87)
![Screenshot 2025-03-17 164542](https://github.com/user-attachments/assets/7a1df40a-ee7b-4981-8dd0-1f4f489105ca)

After processing, extracted tables are saved as Excel files in the output/ folder, each sheet containing a table from the PDF.

