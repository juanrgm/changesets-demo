module.exports = async ({ core }) => {
  const output = { test: true };
  
  for (const name in output) {
    core.setOutput(name, output[name]);
  }

  console.log(output);
};
