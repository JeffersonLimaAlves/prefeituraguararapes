import { describe, it, expect } from 'vitest';
import {CO, Duration, EntityManager, Project, Status, StatusEnum, Type, WP, TypeEnum, User} from "op-client";


describe('OpenProject API', () => {
  const em = new EntityManager({
    baseUrl: "http://localhost:8086",//process.env.BASE_URL!,
    apiOptions: {
      apiKey:"YXBpa2V5OmJkYTQxYjE1ODRhNzVkMjM0Mzg4YTg5NThmOWI1NThlZjhiNzhlYzk1MDViM2ZmOTdlYjIyYjU1ZjhkMjBhNDM="
    },
    createLogger: () => console
  });

  it('List Tasks', () => new Promise((done) => {
    em.get<WP>(WP, 37).then((value:WP) => {
      // console.log(value);
      done(undefined);
      expect(true).toEqual(true);
    });
  }));

  it('filter wp by status (from OP doc site)', async () => {
    const res = await em.getMany(WP, {
      filters: [{
        status_id: {
          operator: "o",
          values: null
        }
      }],
      offset:2
    })
    expect(res).toBeInstanceOf(Array);
    expect(res.length).toBeGreaterThan(1);
    res.forEach((wp) => {
      console.log('wp id:', wp.body.id);
    });
  })  
});