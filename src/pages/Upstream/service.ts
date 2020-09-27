/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { request } from 'umi';

export const fetchList = ({ current = 1, pageSize = 10 }, search: string) => {
  // TODO: Use Cache and search on local
  return request<Res<ResListData<UpstreamModule.Entity>>>('/upstreams').then(({ data }) => ({
    data: data.rows,
    total: data.total_size,
  }))
}

export const fetchOne = (id: string) => request<UpstreamModule.ResEntity>(`/upstreams/${id}`);

export const create = (data: UpstreamModule.Entity) =>
  request('/upstreams', {
    method: 'POST',
    data,
  });

export const update = (id: string, data: UpstreamModule.Entity) =>
  request(`/upstreams/${id}`, {
    method: 'PUT',
    data,
  });

export const remove = (id: string) => request(`/upstreams/${id}`, { method: 'DELETE' });
