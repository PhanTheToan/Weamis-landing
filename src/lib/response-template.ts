import handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

export const compileTemplate = (data: any) => {
    const templatePath = path.join(process.cwd(), 'src/templates/response-template.hbs');
    const source = fs.readFileSync(templatePath, 'utf-8');
    const template = handlebars.compile(source);
    return template(data);
};
