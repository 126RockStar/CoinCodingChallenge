import Table from 'containers/Table';
import Graph from 'containers/Graph';
import 'assets/scss/base.scss';

function App() {
  return (
    <div className="app container">
      <header className="app-header">
        <h1>Coding Challenge</h1>
      </header>
      <main className="app-main">
        <section className="app-main__table">
          <h2>Part 1: Table</h2>
          <Table />
        </section>
        <section className="app-main__graph">
          <h2>Part 2: Graphing Skills</h2>
          <Graph />
        </section>
      </main>
      <footer className="app-footer">
        <p>This web application was developed by Donald.</p>
      </footer>
    </div>
  );
}

export default App;
