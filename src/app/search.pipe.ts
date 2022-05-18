import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterUser"
})
export class SearchFilterPipe implements PipeTransform {
  transform(value, args) {
    if (!value) return null;

    args = args.toLowerCase();

    return value.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}
