import { processData } from './processData'
import { testCSV } from './testUtils/testData'

/**
 * Verify correct processing of test CSV data
 */
test('processData Snapshot', () => {
  const processedData = processData(testCSV)
  expect(processedData).toMatchSnapshot()
})
