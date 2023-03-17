// TODO Add this --custom-formatter to `lint:style` script in `package.json`

module.exports = async (...params) => {

	const fs = await import("fs");
	const stylelint = await import("stylelint");

	const NowTs = new Date().getTime(),
		string_result = stylelint.formatters.string(...params),
		json_result = stylelint.formatters.json(...params);

	fs.writeFileSync("temp/stylelint-log/stylelint-log-" + NowTs + ".json", json_result, { encoding: "utf8" });
	fs.writeFileSync("temp/stylelint-log/stylelint-log-" + NowTs + ".txt", string_result, { encoding: "utf8" });
	fs.writeFileSync("temp/stylelint-log/stylelint-log-last.txt", string_result, { encoding: "utf8" });
	return string_result;
};
