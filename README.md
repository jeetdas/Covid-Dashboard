# COVID-19 Dashboard

This project is a web-based dashboard for visualizing COVID-19 statistics across the United States. It includes data on cases, deaths, hospitalizations, and vaccinations, providing a comprehensive overview of the pandemic's impact at the state level.

## Features

- **Data Display**: Shows detailed COVID-19 statistics by state.
- **Responsiveness**: Adaptable to both desktop and mobile viewports.
- **Sorting Functionality**: Users can sort data by any column.
- **Visualization**: Includes bar charts to visualize cases and vaccination rates.

## Technology Stack

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **EJS**: Templating engine to generate HTML markup with plain JavaScript.
- **DataTables**: A jQuery plugin that adds advanced interaction controls to HTML tables.
- **Chart.js**: Simple yet flexible JavaScript charting for designers & developers.
- **Bootstrap**: For responsive, mobile-first projects on the web.

## Getting Started

### Prerequisites

- Node.js (Download and install from [Node.js official website](https://nodejs.org/))
- npm (Comes with Node.js installation)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/covid-dashboard.git
   cd covid-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   node server.js
   ```

   Access the application via `http://localhost:8080` in your web browser.

## Usage

Navigate through the dashboard to view detailed statistics. The data table supports sorting and searching to find specific information rapidly. The chart below the table provides a graphical representation of the cases and vaccinations for a more intuitive understanding.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request