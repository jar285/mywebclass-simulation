async function metrics(page) {
  const client = await page.context().newCDPSession(page);
  await client.send('Performance.enable');
  await page.goto('http://localhost:3000/');

  // Wait for page to load completely
  await page.waitForLoadState('networkidle');

  // Get performance metrics
  const performanceMetrics = await client.send('Performance.getMetrics');

  // Filter out only relevant metrics
  const relevantMetrics = performanceMetrics.metrics.filter(metric => {
    return metric.name === 'ScriptDuration' || metric.name === 'TaskDuration' || metric.name === 'LayoutDuration';
  });

  // Calculate total time
  let totalTime = 0;
  relevantMetrics.forEach(metric => {
    totalTime += metric.value;
  });

  // Return result in seconds
  return totalTime / 1000;
}