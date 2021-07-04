import { Injectable } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { environment } from 'environments/environment';



@Injectable({
  providedIn: CoreModule
})
export class AssetsProviderService {

  private readonly root = environment.assetsProvider.root;

  public getBrand(): string {
    return this.getAsset('shared', 'brand.svg');
  }

  public getAsset(dir: AssetDirectory, filename: string): string {
    return `${this.root}/${dir}/${filename}`;
  }
}

export type AssetDirectory = 'shared' | 'draw' | 'history';
