/**
 * Copyright 1999-2019 Seata.io Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference types="react" />
// tslint:disable
import { History } from 'history';
import { ILocaleMap } from '@/locales';

declare const __mock__: boolean;


declare module '*.svg' {
  const SvgIcon: React.ComponentClass<any>;
  export default SvgIcon;
}

declare module 'lodash';

export interface GlobalProps {
  locale: ILocaleMap;
  history: History;
}

declare module '@alifd/next/lib/locale/en-us'
declare module '@alifd/next/lib/locale/zh-cn'
